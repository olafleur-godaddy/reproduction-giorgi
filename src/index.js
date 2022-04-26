import { PluginSidebar } from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';

registerPlugin( 'prefix-gutenberg-sidebar', {
    icon: 'smiley',
    render: () => {
        return (
            <>
                <PluginSidebar
                    name="prefix-gutenberg-sidebar"
                    title= { 'A title' } >
                        Sidebar Content.
                </PluginSidebar>
            </>
        )
    }
} );