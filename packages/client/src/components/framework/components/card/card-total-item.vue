<template>
    <div class="my-card-total-item">
        <div class="my-card-total-item-title"><slot name="title"></slot></div>
        <div class="my-card-total-item-content"><slot></slot></div>
    </div>
</template>

<script>
export default {
    name: 'CardTotal',
}
</script>