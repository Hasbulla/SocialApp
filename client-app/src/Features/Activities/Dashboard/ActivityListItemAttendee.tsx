import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import ProfileCard from '../../Profile/ProfileCard';
import { Profile } from '../../../app/Models/Profile';
import { Image, List, Popup } from 'semantic-ui-react';

interface Props {
    attendees: Profile[];
}

export default observer(function ActivityListItemAttendee({ attendees }: Props) {
    return (
        <List horizontal>
            {attendees.map(attendee => (
                <Popup hoverable key={attendee.username} trigger={
                        <List.Item key={attendee.username} as={Link} to={`/profiles/${attendee.username}`}>
                            <Image size='mini' circular src={attendee.image || '/assets/user.png'} />
                        </List.Item>
                    }
                >
                    <Popup.Content>
                        <ProfileCard profile={attendee} />
                    </Popup.Content>
                </Popup>

            ))}
        </List>
    )
})