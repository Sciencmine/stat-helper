<template>
	<div class="fixed-center text-center">
		<p>
			<img
				id="img-sad"
				src="~assets/sad.svg"
			>
		</p>
		<p class="text-faded">
			Sorry, nothing here...
			<strong>(404)</strong>
		</p>
		<q-btn
			id="btn-back"
			color="secondary"
			to="/"
			label="Go back"
		/>
	</div>
</template>

<script >
export default { name: "Error404" };
</script>

<style scoped>
#img-sad {
	width: 30vw;
	max-width: 150px;
}

#btn-back {
	width: 200px;
}
</style>
