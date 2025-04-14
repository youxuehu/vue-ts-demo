import {getBlockAddress,isOk,generateUuid,provider} from '../../common/common'
import {ProviderOption} from '@yeying-community/yeying-next'
import {TaskTagProvider} from "../../../../src/provider/apps/zuoyepigai/tasktag"
import { create } from '@bufbuild/protobuf'
import {
    TaskTagMetadataSchema
 } from '../../../../src/yeying/api/apps/zuoyepigai/tasktag_pb'


// @ts-ignore
describe('TaskTag', () => {
    // @ts-ignore
    it('detail', async () => {
        console.log(provider.proxy)
        const taskTagProvider = new TaskTagProvider(provider)
        const body = await taskTagProvider.detail("ba77adae-cd5f-4b79-9386-7bb1952f361b")
        console.log(body)
        // @ts-ignore
        console.log(`Success to detail task body=${body.meta}`)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })
    // @ts-ignore
    it('list', async () => {
        console.log(provider.proxy)
        const taskTagProvider = new TaskTagProvider(provider)
        const body = await taskTagProvider.list("1cad3b2d-b803-4e37-9c0b-2ff64ae2063d")
        // @ts-ignore
        console.log(body)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })
    // @ts-ignore
    it('add', async () => {
        console.log(provider.proxy)
        const taskTagProvider = new TaskTagProvider(provider)
        const taskTagMeta = create(TaskTagMetadataSchema, {
            name: "task_tag_" + Date.now(),
            did: "1cad3b2d-b803-4e37-9c0b-2ff64ae2063d",
        })
        const body = await taskTagProvider.add(taskTagMeta)
        // @ts-ignore
        console.log(body.meta)
        console.log(body.status)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })

    // @ts-ignore
    it('update', async () => {
        console.log(provider.proxy)
        const taskTagProvider = new TaskTagProvider(provider)
        const taskTagMeta = create(TaskTagMetadataSchema, {
            uid: "ba77adae-cd5f-4b79-9386-7bb1952f361b",
            name: "task_tag_" + Date.now(),
            did: "1cad3b2d-b803-4e37-9c0b-2ff64ae2063d",
            isDeleted: true
        })
        console.log(taskTagMeta)
        const body = await taskTagProvider.update(taskTagMeta)
        // @ts-ignore
        console.log(body.status)
        console.log(body.meta)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })
})
