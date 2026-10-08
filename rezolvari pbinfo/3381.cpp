///Emanuela Cerchez 100
#include <fstream>

using namespace std;
ifstream fin("ksir.in");
ofstream fout("ksir.out");
long long int k, total, grupa;
int main()
{fin>>k;
 grupa=1; total=0;
 while (total+2*grupa-1<k) {total+=2*grupa-1; grupa++;}
 if (k-total<=grupa) fout<<k-total<<'\n';
    else fout<<grupa<<'\n';
    fout.close();
 return 0;
}