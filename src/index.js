import { PluginSidebar } from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';

registerPlugin( 'prefix-gutenberg-sidebar', {
    icon: 'smiley',
    render: () => {
        return (
            <>
                <PluginSidebar
                    icon='smiley'
                    identifier={ 'fun-complementary-area' }
                    scope="core/edit-post"
                    smallScreenTitle={ 'Small scren title' }
                    title={ 'Title' }>
                            Yo
                </PluginSidebar>
            </>
        )
    }
} );