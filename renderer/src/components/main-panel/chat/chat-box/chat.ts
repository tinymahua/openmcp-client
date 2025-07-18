import type { ToolCallContent, ToolItem } from "@/hook/type";
import { type Ref, ref } from "vue";

import type { OpenAI } from 'openai';
type ChatCompletionChunk = OpenAI.Chat.Completions.ChatCompletionChunk;

export enum MessageState {
    ServerError = 'server internal error',
    ReceiveChunkError = 'receive chunk error',
    Timeout = 'timeout',
    MaxEpochs = 'max epochs',
    Unknown = 'unknown error',
    Abort = 'abort',
    ToolCall = 'tool call failed',
    None = 'none',
    Success = 'success',
    ParseJsonError = 'parse json error',
    NoToolFunction = 'no tool function',
}

export interface IExtraInfo {
    created: number,
    state: MessageState,
    serverName: string,
    usage?: ChatCompletionChunk['usage'];
    [key: string]: any;
}

export interface ToolMessage {
    role: 'tool';
    index: number;
    content: ToolCallContent[];
    tool_call_id?: string
    name?: string // 工具名称，当 role 为 tool
    tool_calls?: ToolCall[],
    extraInfo: IExtraInfo
}

export interface TextMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
    tool_call_id?: string
    name?: string // 工具名称，当 role 为 tool
    tool_calls?: ToolCall[],
    extraInfo: IExtraInfo
}

export type ChatMessage = ToolMessage | TextMessage;

// 新增状态和工具数据
export interface EnableToolItem {
    name: string;
    description: string;
    enabled: boolean;
    inputSchema: any;
}

export interface ChatSetting {
    modelIndex: number
    systemPrompt: string
    enableTools: EnableToolItem[]
    temperature: number
    enableWebSearch: boolean
    contextLength: number
    parallelToolCalls: boolean
    enableXmlWrapper: boolean
}

export interface ChatStorage {
    messages: ChatMessage[]
    settings: ChatSetting
}

export type ToolCall = OpenAI.Chat.Completions.ChatCompletionChunk.Choice.Delta.ToolCall;

interface PromptTextItem {
    type: 'prompt'
    text: string
}

interface ResourceTextItem {
    type: 'resource'
    text: string
}

interface TextItem {
    type: 'text'
    text: string
}

export type RichTextItem = PromptTextItem | ResourceTextItem | TextItem;

export interface ICommonRenderMessage {
    role: 'user' | 'assistant/content';
    content: string;
    showJson?: Ref<boolean>;
    extraInfo: IExtraInfo;
}

export interface IToolRenderMessage {
    role: 'assistant/tool_calls';
    content: string;
    toolResults: ToolCallContent[][];
    tool_calls: ToolCall[];
    showJson?: Ref<boolean>;
    extraInfo: IExtraInfo;
}

export type IRenderMessage = ICommonRenderMessage | IToolRenderMessage;

export function getToolSchema(enableTools: EnableToolItem[]) {
    const toolsSchema = [];
    for (let i = 0; i < enableTools.length; i++) {
        const enableTool = enableTools[i];

        if (enableTool.enabled) {
            toolsSchema.push({
                type: 'function',
                function: {
                    name: enableTool.name,
                    description: enableTool.description || "",
                    parameters: enableTool.inputSchema
                }
            });
        }
    }
    return toolsSchema;
}

export interface EditorContext {
    editor: Ref<HTMLDivElement>;
    [key: string]: any;
}