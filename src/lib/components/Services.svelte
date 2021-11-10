<script>
	import Service from './Service.svelte';
	import webSvg from '../../assets/logo.svg';

	const services = [
		{
			name: 'Custom Design',
			icon: webSvg,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nunc feugiat orci diam feugiat cras. Neque ipsum pharetra risus risus.',
			background: true
		},
		{
			name: 'Custom App',
			icon: webSvg,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nunc feugiat orci diam feugiat cras. Neque ipsum pharetra risus risus.',
			background: false
		},
		{
			name: 'UI/UX Design',
			icon: webSvg,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nunc feugiat orci diam feugiat cras. Neque ipsum pharetra risus risus.',
			background: true
		}
	];
</script>

<section class="services">
	<div class="services__container">
		<div class="services__main">
			<span class="services__title">Explore Our Services</span>
			<button class="services__button">Explore More</button>
		</div>
	</div>
	<div class="services__container">
		{#each services as service}
			<Service
				name={service.name}
				icon={service.icon}
				description={service.description}
				backgroundColor={service.background}
			/>
		{/each}
	</div>
</section>
