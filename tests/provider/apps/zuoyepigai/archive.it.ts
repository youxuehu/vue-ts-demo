import {getBlockAddress,isOk,generateUuid,provider} from '../../common/common'

import {ArchiveProvider} from "../../../../src/provider/apps/zuoyepigai/archive"
import { create } from '@bufbuild/protobuf'
import {
    ArchiveMetadataSchema
 } from '../../../../src/yeying/api/apps/zuoyepigai/archive_pb'


// @ts-ignore
describe('Archive', () => {
    // @ts-ignore
    // 老师调用,查看单个学生的档案详情
    it('detail', async () => {
        console.log(provider.proxy)
        const archiveProvider = new ArchiveProvider(provider)
        const body = await archiveProvider.detail("14c5fe89-9c5c-4a01-90eb-45bcdcbde943")
        // @ts-ignore
        console.log(body.meta)
        console.log(body.status)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })
    // @ts-ignore
    // 老师调用，查看自己的学生的所有档案列表
    it('list', async () => {
        console.log(provider.proxy)
        const archiveProvider = new ArchiveProvider(provider)
        const teacherDid = "1cad3b2d-b803-4e37-9c0b-2ff64ae2063d"
        const name = "archive"
        const pageIndex = 1
        const pageSize = 10
        const body = await archiveProvider.list(teacherDid, name, pageIndex, pageSize)
        // @ts-ignore
        console.log(body.list)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })
    // @ts-ignore
    // 老师调用，添加自己学生的档案
    it('add', async () => {
        console.log(provider.proxy)
        const archiveProvider = new ArchiveProvider(provider)
        const archiveMeta = create(ArchiveMetadataSchema, {
            name: "archive_" + Date.now(),
            studentDid: generateUuid(),
            teacherDid: "1cad3b2d-b803-4e37-9c0b-2ff64ae2063d",
            subject: "数学"
        })
        const body = await archiveProvider.add(archiveMeta)
        // @ts-ignore
        console.log(body.status)
        console.log(body.meta)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })

    // @ts-ignore
    // 老师调用，修改自己学生的档案
    it('update', async () => {
        console.log(provider.proxy)
        const archiveProvider = new ArchiveProvider(provider)
        const archiveMeta = create(ArchiveMetadataSchema, {
            uid: "7618207f-cc2d-4bda-9b67-a351bcb18a4c",
            name: "archive_" + Date.now(),
            subject: "数学"
        })
        const body = await archiveProvider.update(archiveMeta)
        // @ts-ignore
        console.log(body.status)
        console.log(body.meta)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })
    // @ts-ignore
    // 学生调用，查看自己的档案
    it('detailStudent', async () => {
        console.log(provider.proxy)
        const archiveProvider = new ArchiveProvider(provider)
        const body = await archiveProvider.detailStudent("9bfb95a8-613a-4eec-b1b7-4c33cf2f04fd")
        // @ts-ignore
        console.log(body.meta)
        console.log(body.status)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })
})
