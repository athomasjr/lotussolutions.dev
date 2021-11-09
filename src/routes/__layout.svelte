<script>
	import Footer from '$components/footer/Footer.svelte';
	import Header from '$components/header/Header.svelte';
	import '$styles/app.scss';


</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>

</style>
