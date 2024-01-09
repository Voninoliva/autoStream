import Categorie from "./composants/Categorie";
import 'bulma/css/bulma.min.css';
import 'bulma-dashboard/dist/bulma-dashboard.min.css';
import 'bulma-pricingtable/dist/css/bulma-pricingtable.min.css';
import'@creativebulma/bulma-badge/dist/bulma-badge.min.css';
import'@creativebulma/bulma-collapsible/dist/css/bulma-collapsible.min.css';
export default function App() {
        return (
                <div class="dashboard is-full-height">
                        <div class="dashboard-panel is-small is-scrollable">
                                <header class="dashboard-panel-header">
                                        <div class="has-text-centered">
                                                <img src="https://bulma.io/images/bulma-logo.png" width="50%"></img>
                                        </div>
                                </header>
                                <aside class="menu has-text-white">
                                        <p class="menu-label">
                                                General
                                        </p>
                                        <ul class="menu-list">
                                                <li><a>Dashboard</a></li>
                                                <li><a>Annonce</a></li>
                                                <li>
                                                        <a href="#collapse" class="is-active" data-action="collapse">
                                                                Détails
                                                        </a>
                                                        <ul id="collapse" class="is-collapsible">
                                                                <li><a>Members</a></li>
                                                                <li><a>Plugins</a></li>
                                                                <li><a>Add a member</a></li>
                                                        </ul>
                                                </li>
                                        </ul>
                                </aside>
                        </div>
                        <div class="dashboard-main is-scrollable">
                                <nav class="navbar is-fixed-top">
                                        <div class="navbar-brand">
                                                <div class="navbar-burger">
                                                        <span></span><span></span><span></span>
                                                </div>
                                                <span class="navbar-item title">
                                                        Dashboard
                                                </span>
                                        </div>
                                        <div class="navbar-menu">
                                                <div class="navbar-end">
                                                <div className="navbar-item" style={{ cursor: 'pointer' }}>
                                                                <span class="material-symbols-outlined is-relative">
                                                                        notifications
                                                                        <span class="badge is-top-right"></span>
                                                                </span>
                                                        </div>
                                                        <div class="navbar-item">
                                                                <figure class="image">
                                                                        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></img>
                                                                </figure>
                                                        </div>
                                                </div>
                                        </div>
                                </nav>
                        </div>
                </div>
        );
}