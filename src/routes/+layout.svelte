<script>
	import Header from './Header.svelte';
	import "../app.css";
	import './styles.css';
	import '@fontsource/inter'
	import '@fontsource/noto-sans-jp';
	import Fa from "svelte-fa";
  	import { faGithub } from "@fortawesome/free-brands-svg-icons";
	
</script>

<div class="bg-gray-900">
	<Header />
	<main>
		<slot />
	</main>
	<footer class="flex justify-center pb-7">
		<p class="text-gray-300 flex items-center">
			<a href="https://github.com/librewave/librewave">
			<Fa icon={faGithub} size="1.3x" class="mr-2" />
		</a>
			Built with <a href="https://kit.svelte.jp" class="text-white ml-2">SvelteKit</a><span class="px-1">+</span><a class="text-white" href="https://www.cloudflare.com/products/pages/">Cloudflare Pages</a></p>
	</footer>
</div>