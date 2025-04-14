import {getBlockAddress,isOk,generateUuid,provider} from '../../common/common'

import {WarehouseProvider} from "../../../../src/provider/apps/zuoyepigai/warehouse"
import { create } from '@bufbuild/protobuf'
import {
    WarehouseMetadata,
    WarehouseMetadataSchema
 } from '../../../../src/yeying/api/apps/zuoyepigai/warehouse_pb'
 import {
    ImageContentTypeEnum
 } from '../../../../src/yeying/api/apps/zuoyepigai/imagecontent_pb'


// @ts-ignore
describe('Warehouse', () => {
    // @ts-ignore
    it('detail', async () => {
        console.log(provider.proxy)
        const warehouseProvider = new WarehouseProvider(provider)
        const body = await warehouseProvider.detail("3be7ef56-aa8d-4a99-8d6b-e70e125e0cf0")
        // @ts-ignore
        console.log(body.meta)
        console.log(body.status)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })
    // @ts-ignore
    it('list', async () => {
        console.log(provider.proxy)
        const warehouseProvider = new WarehouseProvider(provider)
        const did = "1cad3b2d-b803-4e37-9c0b-2ff64ae2063d"
        const taskUid = "907a6557-6d0d-4c8e-ad16-1a308252693b"
        const pageIndex = 1
        const pageSize = 10
        const body = await warehouseProvider.list(did, taskUid, pageIndex, pageSize)
        // @ts-ignore
        console.log(body.list)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })
    // @ts-ignore
    it('add', async () => {
        console.log(provider.proxy)
        const warehouseProvider = new WarehouseProvider(provider)
        const meta = create(WarehouseMetadataSchema, {
            did: "1cad3b2d-b803-4e37-9c0b-2ff64ae2063d",
            url: "https://example.com/1.jpeg",
            taskUid: "907a6557-6d0d-4c8e-ad16-1a308252693b",
            type: ImageContentTypeEnum.QUESTION
        })
        const body = await warehouseProvider.add(meta)
        // @ts-ignore
        console.log(body.status)
        console.log(body.meta)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })
})
