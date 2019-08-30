<template>
    <div class="center">
        <div class="floor3">
            <a href="javascript:;" class="todolist">未完成待办</a>
            <a href="javascript:;" class="todolist">待审批流程</a>
            <a href="javascript:;" class="todolist">PMP工时填报</a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
     .floor3 {
        height:1.5rem;width:100%;
        display:flex;
        justify-content: center;
        margin:0 auto;
    }
    .floor3 .todolist{
        height:0.6rem;
        line-height: 0.6rem;
        padding:0 0.1rem; 
        color:#0025FF;
        font-size:0.2rem;
        font-weight:bold;
        margin-top:0.45rem;
        border:1px solid #0025FF;
        border-radius: 1.1rem;
        background-color: #FEE500;
    }
    .todolist~.todolist{
        margin-left:0.2rem;
    }
</style>