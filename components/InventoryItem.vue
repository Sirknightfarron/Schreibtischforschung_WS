<template>
    <li class="inv-item">
        <img class="item-icon" :src="item.image">
        <h3>{{ item.was }}</h3>
        <h4>{{ item.text }}</h4>
        <audio :src="item.voice" controls="true" controlslist="nodownload "></audio>
    </li>
</template>

<script>
export default {
    props: [
        'item'
    ],
}
</script>