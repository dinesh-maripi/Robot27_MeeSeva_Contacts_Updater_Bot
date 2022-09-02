# MeeSeva Contacts Updater Bot
> Please go through [usecase description](https://www.youtube.com/watch?v=2XvfBAdYMu8&feature=youtu.be) 
[MeeSeva Contacts Website](https://botsdna.com/MeeSevaContacts/)
## In this project, we perform the following activities

1. open browser and navigate to [MeeSeva Contacts Website](https://botsdna.com/MeeSevaContacts/)
1. extract contacts data using custom JavaScript code
1. Deserialize extracted Json data and convert to DataTable
1. loop through each record
1. open browser and navigate to [google](https://www.google.com) and search for latest MeeSeva contact
1. update each contact based on the usecase conditions
1. write extracted contacts data to output excel
1. done

### Key takeaways
- extracting data using **inject js** activity
- converting **JsonString** to **DataTable** using **deserialize json** activity and selecting TypeArgument as **System.Data.DataTable** in the properties panel
- add new column to DataTable using **add data column** activity
- update data using **update data row item** activity