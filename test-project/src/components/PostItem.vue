<template>
	<article>
		<!--h2>Texto</h2-->
		<h1>{{ post.title }}</h1>	
		<section v-if="actividades.length">
			<Actividad v-for="act in actividades" :key="act.key" :actividad="act"></Actividad>	
		</section>
		<p v-else>No hay nada</p>
	</article>
</template>

<script type="text/javascript">
import Actividad from './Actividad.vue'
export default {
	components: {
		Actividad
	},
	props: {
		post: {
			type: Object,
			required: true
		}
	},
	data () {
    return {
      actividades: [
				
			]
    }
  },
  created: function(){
		console.log(this.post);
		this._getEntradas(this.post.id);
	},
	methods: {
		_getEntradas(_id){
			var vm = this;
		vm.axios.get('http://www.thenegra.com/client_back/wp-json/acf/v3/clientes/'+_id).then(function (response) {
				var _acf = response.data.acf;
				var _act = _acf.informacion.actividades;
				console.log(_act.length);
				var i;
				for(i=0;i<_act.length;i++){
					let actividad = _act[i];
					actividad.key = i;
					vm.actividades.push(actividad);
				}
			})
			.catch(function (error) {
				vm.answer = '¡Error! No se pudo alcanzar la API. ' + error
      })
		}
	}
}
</script>