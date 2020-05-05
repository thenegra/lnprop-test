<template>
	
		
		<ol class="votacion">
			<li v-for="i in 10" :key="i" :class="{selected:(imagen.nota == i)}" v-on:click="imagen.nota = i" >{{ i }}</li>
		</ol>
		
		
	
</template>

<script type="text/javascript">

export default {
	props: {
		imagen: {
			type: Object,
			required: true
		}
	},
	data(){
		return {
		}
	},
	computed:{
	}
}
</script>