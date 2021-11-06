<script>
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
	import '$styles/app.scss';


</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
</style>
