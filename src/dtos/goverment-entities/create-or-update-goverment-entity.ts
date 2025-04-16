class CreateOrUpdateGovermentEntity {
    id?: number | null;
    entityTypeId?: number | null;
    name?: string | null;
    description?: string | null;
    acronym?: string | null;
    address?: string | null;
    phone?: string | null;

    constructor() {
        this.id = null;
        this.name = null;
        this.description = null;
        this.acronym = null;
        this.address = null;
        this.phone = null;
        this.entityTypeId = null;
    }
}

export default CreateOrUpdateGovermentEntity;