<template>
	
		<!--h2>Texto</h2-->
		<section class="actividad segundos">
			<h1>Impresiones de 20 segundos</h1>
		<h2>Imagen {{ currentImagen }} de {{ imagenes.length }}</h2>
		<ImagenSegundos v-for="imagen in imagenes" :current="currentImagen" :imagen="imagen" :key="imagen.index" v-on:nextImage="nextImage"></ImagenSegundos>
		
		</section>
		
	
</template>

<script type="text/javascript">
import ComponenteVotacion from './ComponenteVotacion.vue'
import ImagenSegundos from './ImagenSegundos.vue'
export default {
	components: {
		ImagenSegundos
	},
	props: {
		actividad: {
			type: Object,
			required: true
		}
	},
	methods:{
		nextImage:function(){
			this.currentImagen++;
			if(this.currentImagen>=this.actividad.imagenes.length){
				this.$emit('next-actividad');
			}
		}
	},
	data () {
		return {
			varActividad:this.actividad,
			imagenes:this.actividad.imagenes,
			currentImagen: 0
		}
	},
	created: function(){
		
	}
}
</script>