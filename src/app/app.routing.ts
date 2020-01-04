import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { GroupsComponent } from "./groups/groups.component";
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyStoriesComponent } from './my-stories/my-stories.component';
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { RegisterComponent } from './register';
import { SingleStoryComponent } from './single-story/single-story.component';
import { StoryFeedComponent } from './story-feed/story-feed.component';
import { WriteStoryComponent } from './write-story/write-story.component';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'Blog', component: BlogComponent },
    { path: 'story/:id', component: SingleStoryComponent ,canActivate: [AuthGuard]},
    { path: 'storyfeed', component: StoryFeedComponent },
    { path: 'mystories', component: MyStoriesComponent,canActivate: [AuthGuard] },
    { path: 'wrtiestory', component: WriteStoryComponent,canActivate: [AuthGuard] },
    { path: 'myprofile', component: MyProfileComponent,canActivate: [AuthGuard] },
    { path: 'contact', component: ContactComponent,canActivate: [AuthGuard] },
    { path: 'groups', component: GroupsComponent,canActivate: [AuthGuard] },
    { path: 'home',redirectTo: ''},
 
    // otherwise redirect to home
    { path: '**', component:PagenotfoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes,{useHash: true});