import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Link,
} from '@react-pdf/renderer';
import phoneIcon from '../../assets/images/icons/phone_black.png';
import emailIcon from '../../assets/images/icons/email_black.png';
import locationIcon from '../../assets/images/icons/location_black.png';
import siteIcon from '../../assets/images/icons/link_black.png';
import { createDateRange } from '../../scripts/formatting';

export default function PDF(props) {
  const styles = StyleSheet.create({
    page: {
      margin: '1in',
    },
    section: {
      marginBottom: 10,
      paddingVertical: 10,
      width: '75%',
    },
    personal: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      name: {
        fontSize: 28,
      },
      summary: {
        fontSize: 12,
      },
      contact: {
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 10,
        marginBottom: 5,
      },
      icon: {
        height: 10,
        width: 10,
        marginRight: 5,
      },
    },
    list: {
      marginLeft: 16,
      marginBottom: 10,
      header: {
        fontSize: 20,
      },
      primary: {
        fontSize: 16,
      },
      secondary: {
        fontSize: 12,
      },
    },
  });

  const { page, section, personal, list } = styles;
  const {
    name,
    summary,
    phone,
    email,
    location,
    linkedIn,
    personalSite,
    work,
    education,
  } = props;

  return (
    <Document>
      <Page style={[page]}>
        <View style={[section, personal]}>
          <View style={{ maxWidth: '70%' }}>
            <Text style={personal.name}>{name}</Text>
            <Text style={personal.summary}>{summary}</Text>
          </View>
          <View>
            {phone ? (
              <View style={personal.contact}>
                <Image src={phoneIcon} style={personal.icon} />
                <Text>{phone}</Text>
              </View>
            ) : null}
            {email ? (
              <View style={personal.contact}>
                <Image src={emailIcon} style={personal.icon} />
                <Link href={`mailto:${email}`}>{email}</Link>
              </View>
            ) : null}
            {location ? (
              <View style={personal.contact}>
                <Image src={locationIcon} style={personal.icon} />
                <Text>{location}</Text>
              </View>
            ) : null}
            {linkedIn ? (
              <View style={personal.contact}>
                <Image src={siteIcon} style={personal.icon} />
                <Link href={linkedIn}>{linkedIn}</Link>
              </View>
            ) : null}
            {personalSite ? (
              <View style={personal.contact}>
                <Image src={siteIcon} style={personal.icon} />
                <Link href={personalSite}>{personalSite}</Link>
              </View>
            ) : null}
          </View>
        </View>
        {work.length ? (
          <View style={section}>
            <Text style={list.header}>Work Experience</Text>
            {work.map((workItem) => {
              const {
                position,
                employer,
                startDate,
                endDate,
                currentlyEmployed,
                responsibilities,
              } = workItem;
              return (
                <View style={list}>
                  <Text style={list.primary}>{position}</Text>
                  <Text style={list.secondary}>{employer}</Text>
                  <Text style={list.secondary}>
                    {createDateRange(startDate, endDate, currentlyEmployed)}
                  </Text>
                  <Text style={list.secondary}>{responsibilities}</Text>
                </View>
              );
            })}
          </View>
        ) : null}
        {education.length ? (
          <View style={section}>
            <Text style={list.header}>Education</Text>
            {education.map((educationItem) => {
              const { degree, school, startDate, endDate, currentlyEnrolled } =
                educationItem;
              return (
                <View style={list}>
                  <Text style={list.primary}>{degree}</Text>
                  <Text style={list.secondary}>{school}</Text>
                  <Text style={list.secondary}>
                    {createDateRange(startDate, endDate, currentlyEnrolled)}
                  </Text>
                </View>
              );
            })}
          </View>
        ) : null}
      </Page>
    </Document>
  );
}
