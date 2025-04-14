import {getBlockAddress,isOk,generateUuid,provider} from '../../common/common'
import {ProviderOption} from '@yeying-community/yeying-next'
import {TaskProvider} from "../../../../src/provider/apps/zuoyepigai/task"
import { create } from '@bufbuild/protobuf'
import {
    TaskMetadataSchema
 } from '../../../../src/yeying/api/apps/zuoyepigai/task_pb'

 
// @ts-ignore
describe('Task', () => {
    // @ts-ignore
    it('detail', async () => {
        console.log(provider.proxy)
        const taskProvider = new TaskProvider(provider)
        const body = await taskProvider.detail("907a6557-6d0d-4c8e-ad16-1a308252693b")
        console.log(body)
        // @ts-ignore
        console.log(`Success to detail task body=${body.meta}`)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })
    // @ts-ignore
    it('list', async () => {
        console.log(provider.proxy)
        const taskProvider = new TaskProvider(provider)
        const body = await taskProvider.list("1cad3b2d-b803-4e37-9c0b-2ff64ae2063d")
        // @ts-ignore
        console.log(body)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })
    // @ts-ignore
    it('add', async () => {
        console.log(provider.proxy)
        const taskProvider = new TaskProvider(provider)
        const taskMeta = create(TaskMetadataSchema, {
            uid: generateUuid(),
            name: "task_" + Date.now(),
            description: "test data",
            tagUid: generateUuid(),
            did: "1cad3b2d-b803-4e37-9c0b-2ff64ae2063d",
        })
        console.log(taskMeta)
        const body = await taskProvider.add(taskMeta)
        // @ts-ignore
        console.log(`Success to add task body=${body.status}`)
        console.log(`Success to add task body=${body.meta}`)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })

    // @ts-ignore
    it('update', async () => {
        console.log(provider.proxy)
        const taskProvider = new TaskProvider(provider)
        const taskMeta = create(TaskMetadataSchema, {
            uid: "5aa263c4-8b30-49e6-a2c8-79717d71a8c4",
            name: "task_" + Date.now(),
            description: "test data",
            tagUid: generateUuid(),
            did: "1cad3b2d-b803-4e37-9c0b-2ff64ae2063d",
            isDeleted: true
        })
        console.log(taskMeta)
        const body = await taskProvider.update(taskMeta)
        // @ts-ignore
        console.log(body.status)
        console.log(body.meta)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })
})
