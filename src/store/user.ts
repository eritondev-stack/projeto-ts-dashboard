import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
import { Covid } from '@/models/covidModel'
@Module({ namespaced: true, name: 'User' })

class User extends VuexModule {
  public name = '';
  public covid!: Covid;

  @Mutation
  public updateName (newName: string): void {
    this.name = newName
  }

  @Mutation
  public setCovid (newName: Covid): void {
    this.covid = newName
  }

  get upperCase (): string {
    return this.name.toUpperCase()
  }
}
export default User
