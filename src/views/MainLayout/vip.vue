<template>
  <div style="padding: 1rem 1rem 0rem 1rem;height: 100%;">
    <a-form layout="inline" :model="formState" style="display: flex;justify-content: flex-end;align-items: center;margin-bottom: 1rem;">
        <a-form-item label="手机号">
            <a-input v-model:value="formState.fieldA" placeholder="input  phonenumber to select" />
        </a-form-item>
        <a-form-item>
            <a-button type="primary">查询</a-button>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" @click="showAddVip = true">添加会员</a-button>
            <a-modal v-model:open="showAddVip" title="添加" centered @ok="showAddVip = false">
                <div>
                    <a-form :model="formState" layout="vertical">
                        <a-form-item label="姓氏：">
                            <a-input v-model:value="formState.phone" placeholder="input  phonenumber to select" />
                        </a-form-item>
                        <a-form-item label="性别：">
                            <a-radio-group v-model:value="formState.gender">
                                <a-radio value="1">男</a-radio>
                                <a-radio value="0">女</a-radio>
                            </a-radio-group>
                        </a-form-item>
                        <a-form-item label="生日：">
                            <a-date-picker style="width: 100%;"/>
                        </a-form-item>
                        <a-form-item label="手机号：">
                            <a-input v-model:value="formState.phone" placeholder="请输入手机号" />
                        </a-form-item>
                        <a-form-item label="充值金额：">
                            <a-input-number v-model:value="formState.save" :min="1" style="width: 100%;" />
                        </a-form-item>
                    </a-form>
                </div>
                <template #footer>
                    <a-button key="back" @click="showAddVip = false">取消</a-button>
                    <a-button key="submit" type="primary" @click="showAddVip = false">确认添加</a-button>
                </template>
            </a-modal>
        </a-form-item>
    </a-form>
    <a-table :dataSource="dataSource" :columns="columns" >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <span>
            <a>账号储蓄</a>
            <a-divider type="vertical" />
            <a>修改信息</a>
            <a-divider type="vertical" />
            <a>删除</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link">
              <span>更多</span>
              <down-outlined />
            </a>
          </span>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            dataSource: [
                {
                    key: '1',
                    name: '张',
                    telephone: '13800138001',
                    rechargeAmount: 500
                },
                {
                    key: '2',
                    name: '李',
                    telephone: '13900139002',
                    rechargeAmount: 300
                },
                {
                    key: '3',
                    name: '王',
                    telephone: '13700137003',
                    rechargeAmount: 1000
                },
                {
                    key: '4',
                    name: '赵',
                    telephone: '13600136004',
                    rechargeAmount: 200
                },
                {
                    key: '5',
                    name: '刘',
                    telephone: '13500135005',
                    rechargeAmount: 800
                },
                {
                    key: '6',
                    name: '陈',
                    telephone: '13400134006',
                    rechargeAmount: 150
                },
                {
                    key: '7',
                    name: '杨',
                    telephone: '13300133007',
                    rechargeAmount: 600
                },
                {
                    key: '8',
                    name: '黄',
                    telephone: '13200132008',
                    rechargeAmount: 400
                },
                {
                    key: '9',
                    name: '周',
                    telephone: '13100131009',
                    rechargeAmount: 750
                },
                {
                    key: '10',
                    name: '吴',
                    telephone: '13000130010',
                    rechargeAmount: 250
                }
            ],

            columns: [
                {
                    title: '姓氏',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '性别',
                    dataIndex: ' gender',
                    key: 'gender',
                },
                {
                    title: '生日',
                    dataIndex: 'birthday',
                    key: 'birthday',
                },
                {
                    title: '手机号',
                    dataIndex: 'telephone',
                    key: 'telephone',
                },
                {
                    title: '充值金额',
                    dataIndex: 'rechargeAmount',
                    key: 'rechargeAmount',
                },
                {
                    title: ' 操作',
                    dataIndex: 'action',
                    key: 'action',
                },
            ],

            formState:{
                fieldA: '',
                fieldB: ''
            },

            showAddVip: false,
        };
    },
};
</script>


<style>
</style>