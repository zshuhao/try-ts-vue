
import ENV from './env'
import javaApi from './javaApi'
// import phpApi from './phpApi'

const protocol: string = ENV === 'production' ? 'https:' : 'http:'

let urlDict = {
    getMenu: {
        url: '/webrest/index/getMenu',
        needOaToken: true // 是否需走OA
    },
    token: {
        url: '/auth/secret/token', // 获取accessToken，密文交换的形式
        needLogin: false
    },
    accessToken: {
        url: '/auth/oauth/token', // 获取accessToken，登录交换的形式
        needLogin: false
    },
    userPermission: {
        url: '/auth/user/getUserPermissions', // 获取用户信息
        needLogin: true
    },
    myRequest: {
        url: '/workflow/flowTask/queryMyRequest', // 获取我的请求
        needLogin: true
    },
    myApproval: {
        url: '/workflow/flowTask/queryMyTask', // 获取我的审批
        needLogin: true
    },
    apply: {
        url: '/workflow/process/start', // 申请审批
        needLogin: true
    },
    applyDetail: {
        url: '/workflow/flowTask/queryFlowProcDetail', // 流程详情，表格
        needLogin: true
    },
    upload: {
        url: `${protocol}${javaApi[ENV]}/base/downloadCenter/uploadFile`, // 申请--图片上传
        needLogin: true
    },
    deleteTask: { // 我都请求 取消
        url: '/workflow/process/delete',
        needLogin: true
    },
    startProcess: {
        url: `${protocol}${javaApi[ENV]}/workflow/process/deploy`, // 流程管理后台--启动流程 TODO:需要更改路径
        needLogin: true
    },
    employeeSearch: { // 模糊搜索查询员工信息
        url: '/employe/employe/queryEmployePageCrm',
        needLogin: true
    },
    getEmployeeInfo: {
        url: '/employe/employe/queryEmployeInfo',
        needLogin: true
    },
    completeTask: { // 审核任务 (同意 / 拒绝)
        url: '/workflow/flowTask/completeTask',
        needLogin: true
    },
    getProcessImage: { // 获取完整流程图
        url: '/workflow/process/image',
        needLogin: true
    },
    getAllDoneTask: { // 获取管理所有的任务---已完成
        url: '/workflow/flowManage/queryAllTask',
        needLogin: true
    },
    getAllContinueTask: { // 获取管理所有的任务---进行中
        url: '/workflow/flowManage/queryContinueTask',
        needLogin: true
    },
    transfer: { // 转审
        url: '/workflow/flowTask/claimTask',
        needLogin: true
    },
    getCityTree: { // 获取城市列表
        url: '/base/city/getCityTree',
        needLogin: true
    },
    getDepartment: { // 获取部门
        url: '/employe/employeDepartment/querySubDepartmentEmployeByDepartment',
        needLogin: true
    },
    getBankInfo: {
        url: '/employe/employeBankCard/query',
        needLogin: true
    }
} as any

export default urlDict
