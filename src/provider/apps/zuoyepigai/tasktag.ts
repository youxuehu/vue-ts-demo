// @ts-ignore
import { Authenticate,type ProviderOption,type MessageHeader } from '@yeying-community/yeying-next'
import { TaskTag, AddTaskTagRequestBodySchema, AddTaskTagRequestSchema, type AddTaskTagResponseBody, AddTaskTagResponseBodySchema,
    DetailTaskTagRequestSchema, DetailTaskTagRequestBodySchema, DetailTaskTagResponseBodySchema, type DetailTaskTagResponseBody,
    ListTaskTagRequestSchema, ListTaskTagRequestBodySchema, ListTaskTagResponseBodySchema, type ListTaskTagResponseBody,
    UpdateTaskTagRequestSchema, UpdateTaskTagRequestBodySchema, UpdateTaskTagResponseBodySchema, type UpdateTaskTagResponseBody,
    DeleteTaskTagRequestSchema, DeleteTaskTagRequestBodySchema, DeleteTaskTagResponseBodySchema, type DeleteTaskTagResponseBody,
    type TaskTagMetadata
 } from '../../../yeying/api/apps/zuoyepigai/tasktag_pb'
import { type Client, createClient } from '@connectrpc/connect'
import { createGrpcWebTransport } from '@connectrpc/connect-web'
import { create, toBinary } from '@bufbuild/protobuf'

/**
 * 自定义任务标签管理
 * 有老师创建任务的时候需要关联标签，创建任务表单展示标签列表，来时选择标签，如果没有标签需要创建标签
 * 用户也可以提前创建自己的标签，进入标签管理页面 CURD
 * 每个用户自己管理自己的标签
 */
export class TaskTagProvider {
    private authenticate: Authenticate
    private client: Client<typeof TaskTag>

    /**
     * 构造函数
     * @param option - 提供者选项，如代理设置
     * @example
     * ```ts
     * const providerOption = { proxy: <proxy url>, blockAddress: <your block address> };
     * const taskTagProvider = new TaskTagProvider(providerOption);
     * ```
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(
            TaskTag,
            createGrpcWebTransport({
                baseUrl: option.proxy,
                useBinaryFormat: true
            })
        )
    }

    /**
     * 标签列表
     * @param did 用户标识
     * @returns 
     */
    list(did: string) {
        return new Promise<ListTaskTagResponseBody>(async (resolve, reject) => {
            const body = create(ListTaskTagRequestBodySchema, {
                did: did
            })

            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(ListTaskTagRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for list TaskTag', err)
                return reject(err)
            }

            const request = create(ListTaskTagRequestSchema, { header: header, body: body })
            console.log("获取 request")
            console.log(request)
            try {
                const res = await this.client.list(request)
                await this.authenticate.doResponse(res, ListTaskTagResponseBodySchema)
                resolve(res.body as ListTaskTagResponseBody)
            } catch (err) {
                console.error('Fail to get TaskTag list', err)
                return reject(err)
            }
        })
    }

    /**
     * 标签详情
     * @param uid 
     * @returns 
     */
    detail(uid: string) {
        return new Promise<DetailTaskTagResponseBody>(async (resolve, reject) => {
            const body = create(DetailTaskTagRequestBodySchema, {
                uid: uid
            })

            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(DetailTaskTagRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for detail TaskTag', err)
                return reject(err)
            }

            const request = create(DetailTaskTagRequestSchema, { header: header, body: body })
            console.log("获取 request")
            console.log(request)
            try {
                const res = await this.client.detail(request)
                await this.authenticate.doResponse(res, DetailTaskTagResponseBodySchema)
                resolve(res.body as DetailTaskTagResponseBody)
            } catch (err) {
                console.error('Fail to get TaskTag detail', err)
                return reject(err)
            }
        })
    }

    /**
     * 添加标签
     * @param meta 
     * @returns 
     */
    add(meta: TaskTagMetadata) {
        return new Promise<AddTaskTagResponseBody>(async (resolve, reject) => {
            
            const body = create(AddTaskTagRequestBodySchema, {
                meta: meta
            })

            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(AddTaskTagRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for TaskTag Add', err)
                return reject(err)
            }

            const request = create(AddTaskTagRequestSchema, { header: header, body: body })
            console.log("获取 request")
            console.log(request)
            try {
                const res = await this.client.add(request)
                await this.authenticate.doResponse(res, AddTaskTagResponseBodySchema)
                resolve(res.body as AddTaskTagResponseBody)
            } catch (err) {
                console.error('Fail to get TaskTag Add', err)
                return reject(err)
            }
        })
    }

    /**
     * 修改标签
     * @param meta 
     * @returns 
     */
    update(meta: TaskTagMetadata) {
        return new Promise<UpdateTaskTagResponseBody>(async (resolve, reject) => {
            const body = create(UpdateTaskTagRequestBodySchema, {
                meta: meta
            })

            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(UpdateTaskTagRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for Update TaskTag', err)
                return reject(err)
            }

            const request = create(UpdateTaskTagRequestSchema, { header: header, body: body })
            console.log("获取 request")
            console.log(request)
            try {
                const res = await this.client.update(request)
                await this.authenticate.doResponse(res, UpdateTaskTagResponseBodySchema)
                resolve(res.body as UpdateTaskTagResponseBody)
            } catch (err) {
                console.error('Fail to get TaskTag Update', err)
                return reject(err)
            }
        })
    }

    /**
     * 删除标签
     * @param uid 
     * @returns 
     */
    delete(uid: string) {
        return new Promise<DeleteTaskTagResponseBody>(async (resolve, reject) => {
            const body = create(DeleteTaskTagRequestBodySchema, {
                uid: uid
            })

            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(DeleteTaskTagRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for Delete TaskTag', err)
                return reject(err)
            }

            const request = create(DeleteTaskTagRequestSchema, { header: header, body: body })
            console.log("获取 request")
            console.log(request)
            try {
                const res = await this.client.delete(request)
                await this.authenticate.doResponse(res, DeleteTaskTagResponseBodySchema)
                resolve(res.body as DeleteTaskTagResponseBody)
            } catch (err) {
                console.error('Fail to get TaskTag Delete', err)
                return reject(err)
            }
        })
    }
}