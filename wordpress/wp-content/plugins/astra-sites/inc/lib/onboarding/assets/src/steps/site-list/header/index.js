// External dependencies.
import React from 'react';

// Internal dependencies.
import './style.scss';
import Logo from '../../../components/logo';
import PageBuilder from '../page-builder-filter';
import ExitToDashboard from '../../../components/exist-to-dashboard';
import MyFavorite from './my-favorite';
import TrackingOption from './tracking-option';
import SyncLibrary from './sync-library';
import useWhatsNewRSS from 'whats-new-rss';
import { __ } from '@wordpress/i18n';
import Tooltip from '../../../components/tooltip/tooltip';
import { useStateValue } from '../../../store/store';

const SiteListHeader = () => {
	const [ { bgSyncInProgress, sitesSyncing, currentIndex } ] =
		useStateValue();

	const areSitesSyncing =
		( bgSyncInProgress || sitesSyncing ) && currentIndex === 2;

	// Initialize our library hook.
	useWhatsNewRSS( {
		rssFeedURL: 'https://startertemplates.com/whats-new/feed/',
		selector: '#st-whats-new',
		triggerButton: {
			beforeBtn:
				'<div class="w-4 sm:w-8 h-8 sm:h-10 flex items-center whitespace-nowrap justify-center cursor-pointer rounded-full border border-slate-200">',
			icon: '<svg data-slot="icon" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z"></path></svg>',
			afterBtn: '</div>',
		},
		flyout: {
			title: __( "What's New?", 'astra-sites' ),
			formatDate: ( /** @type Date */ date ) => {
				const dayOfWeek = date.toLocaleDateString( 'en-US', {
					weekday: 'long',
				} );
				const month = date.toLocaleDateString( 'en-US', {
					month: 'long',
				} );
				const day = date.getDate();
				const year = date.getFullYear();

				// Format the date string
				const formattedDate = `${ dayOfWeek } ${ month } ${ day }, ${ year }`;

				return formattedDate;
			},
		},
	} );

	return (
		<div className="site-list-header row">
			<div className="st-header-left">
				<Logo />
			</div>
			<div className="st-header-right">
				<TrackingOption />
				<div className="relative">
					<Tooltip content={ __( "What's New", 'astra-sites' ) }>
						<div id="st-whats-new"></div>
					</Tooltip>
					{ areSitesSyncing && (
						<div className="w-full absolute h-full top-0 bg-white/75 cursor-not-allowed"></div>
					) }
				</div>
				<MyFavorite isDisabled={ areSitesSyncing } />
				<SyncLibrary />
				<PageBuilder isDisabled={ areSitesSyncing } />
				<ExitToDashboard />
			</div>
		</div>
	);
};

export default SiteListHeader;
