<template>

	<section v-if="current == post.id" class="posts">

			<section v-if="post.actividades.length">
				<Actividad v-for="act in post.actividades" :key="act.key" :actividad="act" v-on:next-actividad="nextActividad" :current="currentActividad"></Actividad>	
			</section>
			<p v-else>No hay nada</p>
		
	</section>
</template>

<script type="text/javascript">
import Actividad from './Actividad.vue'
export default {
	components: {
		Actividad
	},
	props: {
		current:{
			type:Number,
			requierd:true
		},
		post: {
			type: Object,
			required: true
		}
	},
	data () {
		return{
			currentActividad: 0
			//actividades:[]
		}
	},
	computed:{
		
	},
  created: function(){
		
		this._getEntradas(this.post.id);
		
	},
	methods: {
		nextActividad:function(){
			alert('cambiando de actividad');
			this.currentActividad++;
		},
		_getEntradas: function(_id){
			var vm = this;
		vm.axios.get('http://www.thenegra.com/client_back/wp-json/acf/v3/clientes/'+_id).then(function (response) {
				var _acf = response.data.acf;
				var _act = _acf.informacion.actividades;
				

				var i;
				vm.post.actividades = [];
				for(i=0;i<_act.length;i++){
					
					let actividad = new Object();
					actividad.tipo = _act[i].tipo;
					actividad.key = i;

					var imagenes = new Array(); 
					
					var ct = 0;
					_act[i].imagenes.forEach(element =>{
						let imagen = new Object();
						imagen.sizes = element.imagen.sizes;
						imagen.index = ct++;
						imagen.nota = 0;
						if(actividad.tipo == '20seg'){
							imagen.invisible = true;
							imagen.tiempo = 20;	
						}
						
						imagenes.push(imagen);
					});
					actividad.imagenes = imagenes;
					
					
					vm.post.actividades.push(actividad);
					
				}
			})
			.catch(function (error) {
				vm.answer = '¡Error! No se pudo alcanzar la API. ' + error
      })
		}
	}
}
</script>