import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { createDateRange } from '../../scripts/formatting';

export default function PDF(props) {
  const styles = StyleSheet.create({
    page: {
      margin: '1in',
    },
    section: {
      marginBottom: 10,
      paddingTop: 10,
      paddingBottom: 10,
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
        fontSize: 10,
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
            <Text style={personal.contact}>{phone}</Text>
            <Text style={personal.contact}>
              <a href={email}>{email}</a>
            </Text>
            <Text style={personal.contact}>{location}</Text>
            <Text style={personal.contact}>
              <a href={linkedIn}>{linkedIn}</a>
            </Text>
            <Text style={personal.contact}>
              <a href={personalSite}>{personalSite}</a>
            </Text>
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
