export interface IState {
  resContentComponent: {
    "editor's choice" : {
        editor: string,
        role: string,
        product: {
          name: string,
          rating: number,
          description: string,
          image: string
        }
    }[],
    "latest articles" : {
        title: string,
        author: string,
        published_at : string
    }[],
    "latest review" : {
        user: string,
        profile: string[],
        product: {
          image: string,
          name: string,
          desc: string
        },
        star: number,
        comment: string
    }[]
  },
  editorComponent: {
      editor: string,
      role: string,
      product: {
        name: string,
        rating: number,
        description: string,
        image: string
      }
  }[],
  articlesComponent: {
    title: string,
    author: string,
    published_at : string
  }[],
  reviewComponent: {
    user: string,
    profile: string[],
    product: {
      image: string,
      name: string,
      desc: string
    },
    star: number,
    comment: string
  }[]
}