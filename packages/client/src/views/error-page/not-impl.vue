<style lang="less">
    @import './403.less';
</style>

<template>
    <div class="error403">
        <div class="error403-body-con">
            <Card>
                <div class="error403-body-con-title">
                    <span class="error403-0-span"><Icon type="android-alert"></Icon></span>
                </div>
                <p class="error403-body-con-message">页面建设中</p>
                <div class="error403-btn-con">
                    <Button @click="goHome" size="large" style="width: 200px;" type="text">返回首页</Button>
                    <Button @click="backPage" size="large" style="width: 200px;margin-left: 40px;" type="primary">返回上一页</Button>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ErrorNotImpl',
    methods: {
        backPage () {
            this.$router.go(-1);
        },
        goHome () {
            this.$router.push({
                path: '/'
            });
        }
    }
};
</script>
