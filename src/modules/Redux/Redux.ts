interface Action {
    type: string;
    payload: any
}

export type Payload<T extends Action>= T['payload']