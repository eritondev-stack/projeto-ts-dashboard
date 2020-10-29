import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
@Module({ namespaced: true, name: 'User' })
class User extends VuexModule {
  public name = 'Eriton Gomes De Souza'
  public transE = 'animate__animated animate__slideInLeft animate__faster'
  public transL = 'animate__animated animate__fadeOut animate__faster'

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
}
export default User
