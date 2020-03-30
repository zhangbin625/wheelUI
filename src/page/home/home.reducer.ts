
const initialState = {
    currentuuid: 0,
    tindex: 1,
    obj: {
        type: 'wrap',
        uuid: 0,
        props: {
            showBorder: true,
            currentuuid: 0
        },
        children: []
    },


}
export const HOME_TYPE = {
    ADD: 'HOME_TYPE_ADD',
    TINDEXADD: 'HOME_TYPE_TINDEX_ADD',
    CURRENTUUIDCHANGE: 'HOME_TYPE_CURRENTUUID_CHANGE'
}

export type HomeState = Readonly<typeof initialState>;
export type Action = {
    type: string,
    payload?: any
}

export default (state = initialState, { type, payload }: Action): HomeState => {
    switch (type) {
        case HOME_TYPE.ADD:
            const { tindex } = state
            return {
                ...state, obj: payload, tindex: tindex + 1
            }
        case HOME_TYPE.TINDEXADD:
            return {
                ...state, tindex: tindex + 1
            }
        case HOME_TYPE.CURRENTUUIDCHANGE:
            return {
                ...state, currentuuid: payload
            }
        default:
            return state
    }
}
export const add = (payload: any) => {
    return {
        type: HOME_TYPE.ADD,
        payload
    }
}
export const currentuuidChange = (currentuuid: number) => {
    return {
        type: HOME_TYPE.CURRENTUUIDCHANGE,
        payload: currentuuid
    }
}


