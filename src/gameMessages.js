export default {
  "こんにちは": {
    type: 'text',
    text: 'こんにちは！調子はどう？',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'message',
            label: '元気!',
            text: '[1]元気!'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: 'ぼちぼち',
            text: '[2]ぼちぼち'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '病気',
            text: '[3]病気'
          }
        }
      ]
    }
  },
  "1": {
    type: 'text',
    text: '調子ええな。'
  },
  "2": {
    type: 'text',
    text: 'いいねぇ。'
  },
  "3": {
    type: 'text',
    text: '病院行った？',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'message',
            label: '行った',
            text: '[4]行った'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '行ってへん',
            text: '[5]行ってへん'
          }
        },
      ]
    }
  },
  "4": {
    type: 'text',
    text: 'お大事に！'
  },
  "5": {
    type: 'text',
    text: '病院に行くべし'
  }
}