import GovermentEntityType from "../goverment-entity-types/goverment-entity-type";

class GovermentEntity{
    id?: number | null;
    name?: string | null;
    description?: string | null;
    acronym?: string | null;
    address?: string | null;
    phone?: string | null;

    entityType?: GovermentEntityType | null;

    constructor(){
        this.id = null;
        this.name = null;
        this.description = null;
        this.acronym = null;
        this.address = null;
        this.phone = null;

        this.entityType = new GovermentEntityType();
    }
}

export default GovermentEntity;