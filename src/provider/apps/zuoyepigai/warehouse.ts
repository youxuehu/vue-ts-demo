import { Authenticate,ProviderOption,MessageHeader } from '@yeying-community/yeying-next'
import { Warehouse, 
    AddWarehouseRequestBodySchema, AddWarehouseRequestSchema, AddWarehouseResponseBody, AddWarehouseResponseBodySchema,
    ListWarehouseRequestBodySchema, ListWarehouseRequestSchema, ListWarehouseResponseBody, ListWarehouseResponseBodySchema,
    DetailWarehouseRequestBodySchema, DetailWarehouseRequestSchema, DetailWarehouseResponseBody, DetailWarehouseResponseBodySchema,
    WarehouseMetadata
 } from '../../../yeying/api/apps/zuoyepigai/warehouse_pb'
import { Client, createClient } from '@connectrpc/connect'
import { createGrpcWebTransport } from '@connectrpc/connect-web'
import { create, toBinary } from '@bufbuild/protobuf'

/**
 * 资产仓库
 */
export class WarehouseProvider {
    private authenticate: Authenticate
    private client: Client<typeof Warehouse>

    /**
     * 构造函数
     * @param option - 提供者选项，如代理设置
     * @example
     * ```ts
     * const providerOption = { proxy: <proxy url>, blockAddress: <your block address> };
     * const warehouseProvider = new WarehouseProvider(providerOption);
     * ```
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(
            Warehouse,
            createGrpcWebTransport({
                baseUrl: option.proxy,
                useBinaryFormat: true
            })
        )
    }

    /**
     * 列表
     * @returns 
     */
    list(did: string, taskUid: string, pageIndex: number, pageSize: number) {
        return new Promise<ListWarehouseResponseBody>(async (resolve, reject) => {
            const body = create(ListWarehouseRequestBodySchema, {
                did: did,
                taskUid: taskUid,
                pageIndex: pageIndex,
                pageSize: pageSize
            })

            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(ListWarehouseRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for list Warehouse', err)
                return reject(err)
            }

            const request = create(ListWarehouseRequestSchema, { header: header, body: body })
            console.log("获取 request")
            console.log(request)
            try {
                const res = await this.client.list(request)
                await this.authenticate.doResponse(res, ListWarehouseResponseBodySchema)
                resolve(res.body as ListWarehouseResponseBody)
            } catch (err) {
                console.error('Fail to get Warehouse list', err)
                return reject(err)
            }
        })
    }

    /**
     * 学生档案详情:老师调用
     * @param uid 
     * @returns 
     */
    detail(uid: string) {
        return new Promise<DetailWarehouseResponseBody>(async (resolve, reject) => {
            const body = create(DetailWarehouseRequestBodySchema, {
                uid: uid
            })

            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(DetailWarehouseRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for detail Warehouse', err)
                return reject(err)
            }

            const request = create(DetailWarehouseRequestSchema, { header: header, body: body })
            console.log("获取 request")
            console.log(request)
            try {
                const res = await this.client.detail(request)
                console.log(res)
                await this.authenticate.doResponse(res, DetailWarehouseResponseBodySchema)
                resolve(res.body as DetailWarehouseResponseBody)
            } catch (err) {
                console.error('Fail to get Warehouse detail', err)
                return reject(err)
            }
        })
    }

    /**
     * 添加
     * @param WarehouseMetadata 
     * @returns 
     */
    add(meta: WarehouseMetadata) {
        return new Promise<AddWarehouseResponseBody>(async (resolve, reject) => {
            const body = create(AddWarehouseRequestBodySchema, {
                meta: meta
            })

            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(AddWarehouseRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for add Warehouse', err)
                return reject(err)
            }

            const request = create(AddWarehouseRequestSchema, { header: header, body: body })
            console.log("获取 request")
            console.log(request)
            try {
                const res = await this.client.add(request)
                await this.authenticate.doResponse(res, AddWarehouseResponseBodySchema)
                resolve(res.body as AddWarehouseResponseBody)
            } catch (err) {
                console.error('Fail to add Warehouse detail', err)
                return reject(err)
            }
        })
    }
}