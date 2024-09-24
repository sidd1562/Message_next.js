import { Message } from '@/model/User'

export interface ApiResponese {
    success: boolean;
    message: string;
    isAcceptingMessage?: boolean
    messages?: Array<Message>
}