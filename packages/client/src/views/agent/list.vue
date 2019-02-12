<template>
    <div style="text-align: left;">
    <div style="display: inline;">
        <div class="agent-card">
            <CardIcon title="Building" :footer="buildingNum" :isSpin="true" :bgColor="'#FF9A2A'"></CardIcon>
        </div>
        <div class="agent-card">
            <CardIcon title="Idle" :footer="idleNum" type="coffee" :bgColor="'#7FBC39'"></CardIcon>
        </div>
        <div class="agent-card-total">
            <Card>
                <CardTotal>
                    <CardTotalItem><span slot="title">All</span> <span >{{allDatas.length}}</span></CardTotalItem> 
                    <CardTotalItem><span slot="title">Physical</span> <span >{{physicalData.length}}</span></CardTotalItem> 
                    <CardTotalItem><span slot="title">Virtual</span> <span >{{virtualData.length}}</span></CardTotalItem> 
                </CardTotal>
            </Card>
        </div>
    </div>
    
    <Card>
        <div class="agent-title">
            <div class="agent-search">
                <Input @on-change="search" :search="true" v-model="searchValue" :isIcon="true" />             
            </div>
            <Tab activeName="All" @on-select="tabSelect">
                <TabItem class="agent-tabitem" name="All">All</TabItem>
                <TabItem class="agent-tabitem" name="Physical">Physical</TabItem>
                <TabItem class="agent-tabitem" name="Virtual">Virtual</TabItem>
            </Tab>
        </div>
        
    </Card>
    <Card v-for=" item in showDatas" :key="item.id">
        <div  class="agent-list-row">
            <div class="agent-image-item">
                <img :src="require(`../../assets/os icons/${item.os}.png`)" :alt="item.os">
            </div>            
            <div class="agent-list-item">
                <div class="my-row">
                    <div class="my-col-span-9">
                        <Tag><Icon class="my-tag-icon" size="16"  type="desktop"></Icon></Tag>
                        <Tag color="#00B4CF">{{item.name}}</Tag>
                    </div>
                    
                    <div class="my-col-span-3 my-hidden-sm">
                        <Tag color="#FFF" bgColor="#FF9A2A">{{item.status}}</Tag>
                    </div>
                    <div class="my-col-span-6">
                        <Tag><Icon size="16" class="my-tag-icon"  type="info"></Icon> {{item.ip}}</Tag>
                    </div>
                    <div class="my-col-span-6">
                        <Tag><Icon size="16" class="my-tag-icon"  type="folder"></Icon> {{item.location}}</Tag>
                    </div>           
                    
                </div>
                <div>
                    <div class="agent-card-resource" style="float: left;">
                        <Tag>
                            <Pop @on-cancle="cancle" @on-ok="addResource(item)">
                                <label slot="header">Separate multiple resource name with commans</label>
                                <Icon type="plus" class="my-tag-icon" bgColor="#00B4CF" slot="button" size="16" color="#FFF"></Icon>
                                <Input placeholder="Input value" color="#00B4CF" style="width: 100%;" slot="body" v-model="resources" />
                            </Pop>
                        </Tag>
                    </div>
                    <div class="agent-card-resource">
                        <template v-for="(resource, index) in item.resources" >
                            <Tag @on-click="removeResource(item, index)" :key="resource" bgColor="#EFEFEF" :closeable="true"> {{resource}}</Tag>&nbsp;
                            <br :key="index" class="my-show-sm" v-if="(index + 1) % 2 == 0" />
                        </template>
                    </div>
                    <div class="agent-card-resource-button" v-if="item.status == 'building'" >
                        <Button  type="primary" style="float: right;"  @on-click="handleDeny(item)" ><Icon size="16"  type="deny"></Icon> Deny</Button>
                    </div>                   
                </div>
            </div>
        </div>
    </Card>  
    </div>
</template>
<script>

    export default {
        data(){
            return {
                showDatas: [],
                allDatas: [],
                data: [],
                virtualData: [],
                physicalData: [],
                idleNum: 0,
                buildingNum: 0,
                resources: '',
                searchValue: ''
            }
        },
        beforeMount() {
            this.init()
        },
        methods: {
            async init(){
                this.allDatas= await this.$http.get('agents')
                this.data = this.allDatas
                this.showDatas = this.data
                let idleNum = 0
                let buildingNum = 0
                this.data.forEach( item => {
                    item.type == 'physical' ? this.physicalData.push(item) : this.virtualData.push(item)
                    item.status == 'idle' ? idleNum ++ : buildingNum ++
                })
                this.buildingNum = buildingNum
                this.idleNum = idleNum
            },
            async handleDeny(item){
                item.status = 'idle'
                let m = await this.$http.put(`agents/${item.id}`, item)
                if(m){
                    this.Message.newInstance({type: 'success', text: 'Success'});  
                } 
            },
            async addResource(item){
                if(this.resources){
                    const arr = this.resources.split(',')
                    if(item.resources.length > 4){
                        this.$Message.newInstance({type: 'warning', text: 'The length is too long !'});  
                    }else{
                        item.resources = item.resources.concat(arr)
                        let m = await this.$http.put(`agents/${item.id}`, item)
                        if(m){
                            this.$Message.newInstance({type: 'success', text: 'Success'});  
                        } 
                    }                    
                } else {
                    this.$Message.newInstance({type: 'warning', text: 'Empty'});  
                }
                this.cancle()                
            },
            search(){
                this.showDatas = this.data.filter( item => item.name.search(this.searchValue) > -1)                
            },
            tabSelect(name){
                switch(name){
                    case 'All': 
                        this.showDatas = this.data = this.allDatas
                        break;
                    case 'Physical':
                        this.showDatas = this.data = this.physicalData
                        break;
                    case 'Virtual':
                        this.showDatas = this.data = this.virtualData
                        break;
                    default: 
                        this.showDatas = this.data = this.allDatas
                        break;
                }
                this.searchValue = '';
            },
            async removeResource(item, index){           
                item.resources.splice(index, 1) 
                let m = await this.$http.put(`agents/${item.id}`, item)
                if(m){
                    this.$Message.newInstance({type: 'success', text: 'Success'}); 
                }                            
            },
            cancle(){
                this.resources = ''
            },
            ok(){

                this.cancle()
            }

        },
    };
</script>

<style lang="less">
    
</style>
