import pyodbc

conn = pyodbc.connect(
    'DRIVER={ODBC Driver 18 for SQL Server};'
    'SERVER=ALIENM18;'
    'DATABASE=data;'
    'UID=sa;'
    'PWD=sa;'
    'TrustServerCertificate=yes;'
)
print("Connessione riuscita!")
