<template>
    <div class="min-h-screen relative">
		<img
			src="/background.png"
			alt="Index Home"
			class="object-cover h-full w-full absolute inset-0 -z-0"
		/>
		<div
			class="absolute inset-0"
		></div>
		<div class="h-full relative">
			<Header/>
            <Content/>
		</div>
	</div>
    
</template>
  
<script>
import Content from '~~/components/Content.vue';
import Header from '~~/components/Header.vue';
export default {
    components:[
        Header,
        Content 
    ]
}
</script>