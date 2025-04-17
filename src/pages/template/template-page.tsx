import GovermentEntitiesPage from '../goverment-entities/goverment-entities-page';
import './template-page.css';

interface Props {
    onLogout?: () => void
}

const TemplatePage = (props: Props) => {
    return (
        <div className="template-page">
            <div className="template-page-header">
                <div className="template-page-title">
                    State Hub
                </div>

                <div className="template-page-logout">
                    <img onClick={props.onLogout} src="icons/logout.png" alt="" className="template-page-logout-image" />
                </div>
            </div>

            <div className="template-page-left">
                <img src="images/logo-template.svg" alt="" className="template-page-logo" />

                <div className="template-page-option">
                    <img src="images/home.svg" alt="" className="template-page-option-image"/>

                    <span className="template-page-option-title">
                        Inicio
                    </span>
                </div>
            </div>

            <div className="template-page-content">
                <GovermentEntitiesPage />
            </div>

            <div className="template-page-footer">

            </div>
        </div>
    );
}

export default TemplatePage;