<template>
	<div>
	<nav class="projects-nav" v-if="currentProyecto == -1">
		<h2>Elegí un proyecto</h2>
		<ul>
			<li v-for="post in posts" class="proyect-button" :key="post.id">
				<a v-on:click="currentProyecto = post.id" title="">
					{{ post.title }}
				</a></li>
		</ul>
	</nav>
	
	<div v-if="!fallo">
	<section class="posts" v-if="(posts.length)">
		
			<Proyecto v-for="post in posts" :key="post.id" :current="currentProyecto" :post="post" ></Proyecto>
		
		
	</section>
	<p v-else>Cargando...</p>
	</div>
	<p v-else>Falló esto</p>
	</div>
</template>

<script type="text/javascript">
	import Proyecto from './Proyecto.vue'

	let nextTodoId = 1

export default {
	components: {
		Proyecto
	},
	created:function(){
		this.getEntradas()
	},
  data () {
    return {
      posts: [
				
			],
			currentProyecto: -1,
			fallo: false
    }
  },
	methods: {
		getEntradas(){
			var vm = this;
		vm.axios.get('http://www.thenegra.com/client_back/wp-json/wp/v2/clientes').then(function (response) {
				response.data.forEach(element =>{
					let post = {};
					post.id = element.id
					post.title = element.title.rendered
					post.post_info = element
					post.actividades = []
					vm.posts.push(post)
				});
			})
			.catch(function (error) {
				vm.fallo = true;
				vm.answer = '¡Error! No se pudo alcanzar la API. ' + error
      })
		}
	}
}
</script>