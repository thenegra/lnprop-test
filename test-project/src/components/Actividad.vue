<template>
	
		<!--h2>Texto</h2-->
		<ActividadSegundos v-if="(actividad.tipo = '20seg' && current == actividad.key)" :actividad="actividad" v-on:next-actividad="nextActividad"></ActividadSegundos>
		
		
	
</template>

<script type="text/javascript">
	import ActividadSegundos from './ActSegundos.vue'
	export default {
	components: {
		ActividadSegundos
	},
	props: {
		current:{
			type:Number
		},
		actividad: {
			type: Object,
			required: true
		}
	},
	data () {
	return {
	/*actividades: [
		
	]*/
		}
	},
	methods:{
		nextActividad:function(){
			this.$emit('next-actividad');
		}
	},
	created: function(){
		console.log(this.actividad);

	}
}
</script>