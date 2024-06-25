export const deleteOne=(repositoryModel)=>async (delete_id)=>{
    return await repositoryModel.eliminar(delete_id)
}
export const activateOne=(repositoryModel)=>async (activate_id)=>{
    return await repositoryModel.activar(activate_id)
}