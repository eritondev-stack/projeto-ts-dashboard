import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
import { Covid } from '@/models/covidModel'
@Module({ namespaced: true, name: 'User' })

class User extends VuexModule {
  public name = 'Eriton Gomes De Souza';
  public transE = 'animate__animated animate__slideInLeft- animate__faster';
  public transL = 'animate__animated animate__fadeOut- animate__faster';
  public covid!: Covid;

  @Mutation
  public updateName (newName: string): void {
    this.name = newName
  }

  @Mutation
  public setTransE (newName: string): void {
    this.transE = newName
  }

  @Mutation
  public setTransL (newName: string): void {
    this.transL = newName
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
