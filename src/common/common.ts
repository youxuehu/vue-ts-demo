import {BlockAddress} from "@yeying-community/yeying-web3";
import { type ResponseStatus,ResponseCodeEnum } from '@yeying-community/yeying-next'

export function getBlockAddress(): BlockAddress {
    return {
        privateKey: '0x1b8b419505748c88071b8d28caafa4a74bcdc4a540542e7b4514b13a3f35c96c',
        identifier: 'did:ethr:0x7e4:0x0396be3542029111627e1d08c65a740fcda7b8a341a618ebfe92bace61c0fd5506',
        publicKey: '0x0396be3542029111627e1d08c65a740fcda7b8a341a618ebfe92bace61c0fd5506',
        address: '0x6256583430f59D8d526a0a694e7d37ea1956d0AC',
        mnemonic: undefined
    }
}

export function isOk(status?: ResponseStatus) {
    return status !== undefined && status.code === ResponseCodeEnum.OK
}


export function generateUuid() {
    // 创建一个 16 字节的随机数组缓冲区
    const buffer = new Uint8Array(16)
    crypto.getRandomValues(buffer)

    // 将缓冲区转换为 UUID 的格式
    buffer[6] &= 0x0f
    buffer[6] |= 0x40
    buffer[8] &= 0x3f
    buffer[8] |= 0x80

    const hex = Array.from(new Uint8Array(buffer))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('')
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
}

export interface ProviderOption {
    /**
     * 代理服务器的 URL 地址。
     *
     * @example
     * 'http://example.com'
     */
    proxy: string

    /**
     * 区块链地址。
     */
    blockAddress: BlockAddress
}

export const provider: ProviderOption = {
    proxy: "http://121.199.75.42:8741",
    blockAddress: getBlockAddress(),
}