
import { AppClient, InstanceOptions, IOContext } from '@vtex/api'


export default class Analytics extends AppClient {
    constructor(context: IOContext, options?: InstanceOptions) {
    super('vtex.mocked-analytics@0.x', context, options)
  }

  
  public getLiveUsers(): Promise<LiveUsersProduct[]> {
       return this.http.get('_v/live-products')
  }
}
//slug:un string que representa el ID del producto 
//liveUsers:un número que es la cantidad de usuarios que visualizan este producto,
interface LiveUsersProduct {
  slug: string
  liveUsers: number
}