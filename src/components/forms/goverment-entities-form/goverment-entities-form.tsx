import { useCallback, useEffect, useState } from "react";
import Button from "../../button/button";
import CreateOrUpdateGovermentEntity from "../../../dtos/goverment-entities/create-or-update-goverment-entity";
import Input from "../../input/input";
import '../form.css';

interface Props {
    govermentEntity?: CreateOrUpdateGovermentEntity | null;
    show: boolean;
    onSave?: () => void;
    onClose?: () => void;
}

const GovermentEntitiesForm = (props: Props) => {
    const [show, setShow] = useState<boolean>(false);
    const [govermentEntity, setGovermentEntity] = useState<CreateOrUpdateGovermentEntity>();

    useEffect(() => {
        if (props.govermentEntity === null) {
            setGovermentEntity(new CreateOrUpdateGovermentEntity());
        }
        else {
            setGovermentEntity(props.govermentEntity);
        }
    }, []);

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    const save = useCallback(() => {
        setShow(false);

        props.onSave?.()
    }, []);

    const close = useCallback(() => {
        setShow(false);

        props.onClose?.();
    }, []);

    return (
        <div className={`sth-from-container ${show ? 'sth-form-show' : 'sth-form-hide'}`}>
            <div className="sth-form">
                <div className="sth-form-header">
                    <div className="sth-form-title">
                        Crear entidad gubernamental
                    </div>
                </div>

                <div className="sth-form-body">
                    <div className="row">
                        <div className="sth-form-field col-6">
                            <Input
                                title={'Nombre'}
                                value={govermentEntity?.name}
                                type={'text'}
                                callback={name => setGovermentEntity({
                                    ...govermentEntity,
                                    name: name
                                })}
                            />
                        </div>

                        <div className="sth-form-field col-6">
                            <Input
                                title={'Descripción'}
                                value={govermentEntity?.description}
                                type={'text'}
                                callback={description => setGovermentEntity({
                                    ...govermentEntity,
                                    description: description
                                })}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="sth-form-field col-6">
                            <Input
                                title={'Acrónimo'}
                                value={govermentEntity?.acronym}
                                type={'text'}
                                callback={acronym => setGovermentEntity({
                                    ...govermentEntity,
                                    acronym: acronym
                                })}
                            />
                        </div>

                        <div className="sth-form-field col-6">
                            <Input
                                title={'Dirección'}
                                value={govermentEntity?.address}
                                type={'text'}
                                callback={address => setGovermentEntity({
                                    ...govermentEntity,
                                    address: address
                                })}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="sth-form-field col-6">
                            <Input
                                title={'Teléfono'}
                                value={govermentEntity?.phone}
                                type={'text'}
                                callback={phone => setGovermentEntity({
                                    ...govermentEntity,
                                    phone: phone
                                })}
                            />
                        </div>
                    </div>
                </div>

                <div className="sth-form-footer">
                    <div className="sth-form-button">
                        <Button
                            title={'Guardar'}
                            buttonClassName={'sth-button sth-button-success sth-button-md'}
                            showLoading={false}
                            disabled={false}
                            callback={save}
                        />
                    </div>

                    <div className="sth-form-button">
                        <Button
                            title={'Cancelar'}
                            buttonClassName={'sth-button sth-button-secondary sth-button-md'}
                            showLoading={false}
                            disabled={false}
                            callback={close}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GovermentEntitiesForm;