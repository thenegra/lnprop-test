<template>
	
	<article class="imagen-vote" v-if="current == imagen.index">
		
				
				<div class="img-container" v-bind:class="{invisible:imagen.invisible}">
						<div class="contenedor" >
							<p>Cuando estés listo clickeá:</p>
							<button v-on:click="test">Empezar</button>
						</div>
				<img v-bind:src="imagen.sizes['hq-1920']"  alt="" >
				<span class="timer">{{ imagen.tiempo }}</span>
				<ComponenteVotacion :imagen="imagen" v-if="!imagen.invisible" v-on:input="imagen=null"></ComponenteVotacion>
				<button v-if="!imagen.invisible && imagen.nota>0" class="saltar" v-on:click="nextImg">Siguiente</button>
				</div>
				
			</article>
</template>
<script type="text/javascript">
import ComponenteVotacion from './ComponenteVotacion.vue'
export default {
	components: {
		ComponenteVotacion
	},
	props: {
		imagen: {
			type: Object,
			required: true
		},
		current:{
			type: Number
		}
	},
	data () {
		return {
			imagenes:[],
			tm:0
		}
	},
	methods: {
		test:function(){
			this.imagen.invisible = false;
			
			var vm = this;
			vm.tm = setInterval(function(){
				
				
				if(vm.imagen.tiempo>1){
					vm.imagen.tiempo--;
				} else{
					vm.nextImg();

				}
			},1000);
		},
		nextImg:function(){
			var vm = this;
			clearInterval(vm.tm);
			vm.$emit('nextImage');
		}
	},
	created: function(){
		var vm = this;
		
	}
}
</script>