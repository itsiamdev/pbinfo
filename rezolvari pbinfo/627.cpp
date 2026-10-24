#include <fstream>

using namespace std;
ifstream f("tripar.in");
ofstream g("tripar.out");
int p,n,m,x;

unsigned long long int nr_triunghiuri(int n,int m)
{
    unsigned long long int s=0,pas=1;
    for(int i=1;i<=n;++i)
        s+=pas,pas+=2;
    for(int i=1;i<=m;++i) 
        s*=4;
    return s;
}

unsigned long long int nr_perechi_dr_paralele(int n,int m)
{
    unsigned long long int nr_benzi=n; 
    for(int i=1;i<=m;++i) 
        nr_benzi*=2; 
    unsigned long long int nr=nr_benzi-1; 
    return 3*(nr*(nr+1)/2);
}

int main()
{
    f>>p;
    f>>n>>m;
    if(p==1) 
        for(int i=0;i<n;++i)
            f>>x,g<<nr_triunghiuri(x,m)<<'\n';
    else 
    {
        for(int i=0;i<n;++i)
            f>>x,g<<nr_perechi_dr_paralele(x,m)<<'\n';
    }
    return 0;
}